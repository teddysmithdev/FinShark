interface Props {
  tabItems: {
    id: number;
    title: string;
    icon: string;
    content: string;
  }[];
  activeSidebarItem: number;
  children: React.ReactNode;
}

const CompanyDashboard: React.FC<Props> = ({
  tabItems,
  activeSidebarItem,
  children,
}: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
      <div className="relative pt-10 pb-20 bg-lightBlue-500">
        <div className="px-4 md:px-6 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">{children}</div>

            <div className="flex flex-wrap">
              {tabItems.map(({ id, content }) => {
                return activeSidebarItem === id ? content : "";
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
