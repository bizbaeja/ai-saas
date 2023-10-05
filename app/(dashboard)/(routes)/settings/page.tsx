import {Heading} from "@/components/heading";
import {Button} from "@/components/ui/button";
import {Settings} from "lucide-react";

const SettingsPage = async () => {
    const isPro = false;
    return (
        <div>
                <Heading
    title="Settings"
    description="Manage your account settings."
    icon={Settings}
    iconColor="text-gray-700"
    bgColor="bg-gray-700/10"
    />
        <div className="px-4 lg:px-8 space-y-4">
            <div className="text-muted-foreground text-sm">
              
            </div>
            <Button />
        </div>

        </div>

        )
}
export default SettingsPage;