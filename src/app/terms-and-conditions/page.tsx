import { LegalPage } from "@/components/ui/LegalPage";
import { termsAndConditions } from "@/lib/data/legal";

export default function TermsAndConditionsPage() {
  return <LegalPage content={termsAndConditions} />;
}
