import { NextResponse } from "next/server";

// Place ID for Baba Vishwanath Traders, Varanasi
const GOOGLE_PLACE_ID = "ChIJUyzcz14xjjkR-lXVYrGuIfw";

export interface GoogleReviewItem {
  id: string;
  authorName: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTimeDescription: string;
  publishTime?: string;
}

export interface GoogleReviewsResponse {
  configured: boolean;
  businessName: string;
  googleProfileName: string;
  rating: number | null;
  totalReviews: number | null;
  reviews: GoogleReviewItem[];
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  // If no Google Places API key is provided, return empty reviews cleanly without fake data
  if (!apiKey) {
    return NextResponse.json<GoogleReviewsResponse>({
      configured: false,
      businessName: "Varanasi Travelers — A unit of Baba Vishwanath Traders",
      googleProfileName: "Baba Vishwanath Traders",
      rating: null,
      totalReviews: null,
      reviews: [],
    });
  }

  try {
    // Fetch real place details from Google Places API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    );

    if (!response.ok) {
      throw new Error(`Google API returned status ${response.status}`);
    }

    const data = await response.json();
    const result = data.result || {};

    const reviews: GoogleReviewItem[] = (result.reviews || []).map(
      (r: any, idx: number) => ({
        id: `${r.time || idx}`,
        authorName: r.author_name || "Google Reviewer",
        authorPhoto: r.profile_photo_url || "",
        rating: r.rating || 5,
        text: r.text || "",
        relativeTimeDescription: r.relative_time_description || "",
        publishTime: r.time ? new Date(r.time * 1000).toISOString() : undefined,
      })
    );

    return NextResponse.json<GoogleReviewsResponse>({
      configured: true,
      businessName: "Varanasi Travelers — A unit of Baba Vishwanath Traders",
      googleProfileName: result.name || "Baba Vishwanath Traders",
      rating: typeof result.rating === "number" ? result.rating : null,
      totalReviews:
        typeof result.user_ratings_total === "number"
          ? result.user_ratings_total
          : null,
      reviews,
    });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json<GoogleReviewsResponse>(
      {
        configured: true,
        businessName: "Varanasi Travelers — A unit of Baba Vishwanath Traders",
        googleProfileName: "Baba Vishwanath Traders",
        rating: null,
        totalReviews: null,
        reviews: [],
      },
      { status: 500 }
    );
  }
}
