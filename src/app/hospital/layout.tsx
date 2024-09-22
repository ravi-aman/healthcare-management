import HospitalDashboardLayout from "@/components/hospital/HospitalDashboardLayout";

export const metadata = {
    title: 'Hospital Dashboard',
    description: 'Manage hospital operations',
}

export default function HospitalLayout({ children }: { children: React.ReactNode }) {
    return (
        <HospitalDashboardLayout>
            {children}
        </HospitalDashboardLayout>
    );
}