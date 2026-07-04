import { LegalPage } from "@/components/ui/LegalPage";
import { privacyPolicy } from "@/lib/data/legal";

export default function PrivacyPolicyPage() {
  return <LegalPage content={privacyPolicy} />;
}
