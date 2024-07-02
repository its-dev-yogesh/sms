export const API_CONFIG = {
  USER: {
    CREATE: { _id: '_createUser', path: '/user/create' },
    READ: { _id: '_getUserRead', path: (id: string) => `/user/read/${id}` },
    UPDATE: {
      _id: '_mutateUserUpdate',
      path: (id: string) => `/user/update/${id}`
    },
    DELETE: {
      _id: '_getUserDelete',
      path: (id: string) => `/user/delete/${id}`
    },
    LIST: {
      _id: '_getUserList',
      path: (limit: number, page: number) =>
        `/user/list?limit=${limit}&page=${page}`
    }
  },
  AUTH: {
    LOGIN: { _id: '_getAuthLogin', path: '/auth/login' },
    LOGOUT: { _id: '_getAuthLogout', path: '/auth/logout' },
    PASSWORD_RESET: {
      _id: '_mutateAuthPasswordReset',
      path: '/auth/password-reset'
    },
    REFRESH_TOKEN: { _id: '_getAuthRefreshToken', path: '/auth/refresh-token' }
  },
  CONTACT: {
    CREATE: { _id: '_createContact', path: '/contact/create' },
    READ: {
      _id: '_getContactRead',
      path: (id: string) => `/contact/read/${id}`
    },
    UPDATE: {
      _id: '_mutateContactUpdate',
      path: (id: string) => `/contact/update/${id}`
    },
    DELETE: {
      _id: '_getContactDelete',
      path: (id: string) => `/contact/delete/${id}`
    },
    LIST: {
      _id: '_getContactList',
      path: (limit: number, page: number) =>
        `/contact/list?limit=${limit}&page=${page}`
    },
    SEARCH: {
      _id: '_getContactSearch',
      path: (query: string) => `/contact/search?query=${query}`
    }
  },
  LEAD: {
    CREATE: { _id: '_createLead', path: '/lead/create' },
    READ: { _id: '_getLeadRead', path: (id: string) => `/lead/read/${id}` },
    UPDATE: {
      _id: '_mutateLeadUpdate',
      path: (id: string) => `/lead/update/${id}`
    },
    DELETE: {
      _id: '_getLeadDelete',
      path: (id: string) => `/lead/delete/${id}`
    },
    LIST: {
      _id: '_getLeadList',
      path: (limit: number, page: number) =>
        `/lead/list?limit=${limit}&page=${page}`
    },
    ASSIGN: {
      _id: '_mutateLeadAssign',
      path: (id: string) => `/lead/assign/${id}`
    },
    CONVERT: {
      _id: '_mutateLeadConvert',
      path: (id: string) => `/lead/convert/${id}`
    }
  },
  DEAL: {
    CREATE: { _id: '_createDeal', path: '/deal/create' },
    READ: { _id: '_getDealRead', path: (id: string) => `/deal/read/${id}` },
    UPDATE: {
      _id: '_mutateDealUpdate',
      path: (id: string) => `/deal/update/${id}`
    },
    DELETE: {
      _id: '_getDealDelete',
      path: (id: string) => `/deal/delete/${id}`
    },
    LIST: {
      _id: '_getDealList',
      path: (limit: number, page: number) =>
        `/deal/list?limit=${limit}&page=${page}`
    },
    STAGE_UPDATE: {
      _id: '_mutateDealStageUpdate',
      path: (id: string) => `/deal/stage-update/${id}`
    },
    CLOSE: {
      _id: '_mutateDealClose',
      path: (id: string) => `/deal/close/${id}`
    }
  },
  REPORT: {
    USER_ACTIVITY: {
      _id: '_getReportUserActivity',
      path: '/report/user-activity'
    },
    SALES_PERFORMANCE: {
      _id: '_getReportSalesPerformance',
      path: '/report/sales-performance'
    },
    LEAD_CONVERSION: {
      _id: '_getReportLeadConversion',
      path: '/report/lead-conversion'
    },
    REVENUE_FORECAST: {
      _id: '_getReportRevenueForecast',
      path: '/report/revenue-forecast'
    }
  },
  SETTINGS: {
    GET: { _id: '_getSettingsGet', path: '/settings/get' },
    UPDATE: { _id: '_mutateSettingsUpdate', path: '/settings/update' },
    RESET: { _id: '_mutateSettingsReset', path: '/settings/reset' }
  },
  NOTIFICATIONS: {
    LIST: { _id: '_getNotificationList', path: '/notifications/list' },
    READ: {
      _id: '_getNotificationRead',
      path: (id: string) => `/notifications/read/${id}`
    },
    DELETE: {
      _id: '_getNotificationDelete',
      path: (id: string) => `/notifications/delete/${id}`
    }
  }
};
