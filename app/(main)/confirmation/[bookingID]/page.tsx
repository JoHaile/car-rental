import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { CheckCircle2, Copy, ArrowRight } from "lucide-react";
import Link from "next/link";
import CopyButton from "./CopyButton";

interface Params {
  params: Promise<{ bookingID: string }>;
}

export default async function ConfirmationPage({ params }: Params) {
  const { bookingID } = await params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4 py-12">
      <Card className="w-full max-w-lg shadow-2xl border-0 bg-white/90 dark:bg-zinc-900/90 animate-in fade-in zoom-in-50">
        <CardHeader className="flex flex-col items-center gap-2">
          <CheckCircle2 className="text-green-500 size-12 mb-2 animate-in fade-in" />
          <CardTitle className="text-3xl font-extrabold text-center">
            Booking Confirmed!
          </CardTitle>
          <CardDescription className="text-center text-base mt-2">
            Thank you for booking with{" "}
            <span className="font-semibold text-primary">Brand</span>.<br />
            Your confirmation details are below.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 mt-2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-muted-foreground text-sm">
              Your Booking ID
            </span>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg border border-border">
              <span className="font-mono font-semibold text-lg tracking-wider select-all">
                {bookingID}
              </span>
              <CopyButton bookingID={bookingID} />
            </div>
            <Badge
              variant="outline"
              className="mt-2 text-xs px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700"
            >
              Save this ID for future reference
            </Badge>
          </div>

          <div className="w-full flex flex-col items-center gap-4 mt-4">
            <Link href="/" className="w-full">
              <Button className="w-full text-base font-semibold flex items-center gap-2">
                <ArrowRight className="size-4" /> Go to Home
              </Button>
            </Link>
            <Link href="/bookings" className="w-full">
              <Button
                variant="outline"
                className="w-full text-base font-semibold"
              >
                View My Bookings Details
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
