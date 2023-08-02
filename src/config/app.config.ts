interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Startup',
  applicationName: 'Amazscore',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
