import {
    CodeBracketIcon,
    ComputerDesktopIcon,
    PaintBrushIcon,
    CubeIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/outline";

interface Props {
    icon: string;
}

const IconComponent = ({ icon }: Props) => {
    const iconMap = {
        CubeIcon,
        PaintBrushIcon,
        CodeBracketIcon,
        ComputerDesktopIcon,
        DevicePhoneMobileIcon
    };

    const IconComponents = iconMap[icon as keyof typeof iconMap];

    if (!IconComponents) {
        return <p className="text-white">Icône introuvable : {String(icon)}</p>;
    }

    return (
        <div className="w-16 h-16 text-white">
            <IconComponents className="w-12 h-12" />
        </div>
    );
};

export default IconComponent;