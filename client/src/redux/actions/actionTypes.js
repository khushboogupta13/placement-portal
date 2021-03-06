/*
    Authentication Actions
 */
export const AUTH_START = "AUTH_START";
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS";
export const AUTH_REGISTER_FAIL = "AUTH_REGISTER_FAIL";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAIL = "AUTH_LOGIN_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_FORGOT_PASSWORD = "AUTH_FORGOT_PASSWORD";
export const AUTH_FORGOT_PASSWORD_FAIL = "AUTH_FORGOT_PASSWORD_FAIL";
export const AUTH_FORGOT_PASSWORD_SUCCESS = "AUTH_FORGOT_PASSWORD_SUCCESS";
export const AUTH_RESEND_EMAIL = "AUTH_RESEND_EMAIL";
export const AUTH_RESEND_EMAIL_FAIL = "AUTH_RESEND_EMAIL_FAIL";
export const AUTH_RESEND_EMAIL_SUCCESS = "AUTH_RESEND_EMAIL_SUCCESS";

/*
    Student Profile Actions
 */

export const STUDENT_PROFILE_CREATE = "STUDENT_PROFILE_CREATE";
export const STUDENT_PROFILE_CREATE_FAIL = "STUDENT_PROFILE_CREATE_FAIL";
export const STUDENT_PROFILE_CREATE_SUCCESS = "STUDENT_PROFILE_CREATE_SUCCESS";
export const STUDENT_PROFILE_FETCH = "STUDENT_PROFILE_FETCH";
export const STUDENT_PROFILE_FETCH_FAIL = "STUDENT_PROFILE_FETCH_FAIL";
export const STUDENT_PROFILE_FETCH_SUCCESS = "STUDENT_PROFILE_FETCH_SUCCESS";
export const STUDENT_PROFILE_EDIT = "STUDENT_PROFILE_EDIT";
export const STUDENT_PROFILE_EDIT_FAIL = "STUDENT_PROFILE_EDIT_FAIL";
export const STUDENT_PROFILE_EDIT_SUCCESS = "STUDENT_PROFILE_EDIT_SUCCESS";
export const STUDENT_PROFILE_ADD_EXPERIENCE = "STUDENT_PROFILE_ADD_EXPERIENCE";
export const STUDENT_PROFILE_ADD_EXPERIENCE_FAIL = "STUDENT_PROFILE_ADD_EXPERIENCE_FAIL";
export const STUDENT_PROFILE_ADD_EXPERIENCE_SUCCESS = "STUDENT_PROFILE_ADD_EXPERIENCE_SUCCESS";
export const STUDENT_PROFILE_EDIT_EXPERIENCE = "STUDENT_PROFILE_EDIT_EXPERIENCE";
export const STUDENT_PROFILE_EDIT_EXPERIENCE_FAIL = "STUDENT_PROFILE_EDIT_EXPERIENCE_FAIL";
export const STUDENT_PROFILE_EDIT_EXPERIENCE_SUCCESS = "STUDENT_PROFILE_EDIT_EXPERIENCE_SUCCESS";
export const STUDENT_PROFILE_REMOVE_EXPERIENCE = "STUDENT_PROFILE_REMOVE_EXPERIENCE";
export const STUDENT_PROFILE_REMOVE_EXPERIENCE_FAIL = "STUDENT_PROFILE_REMOVE_EXPERIENCE_FAIL";
export const STUDENT_PROFILE_REMOVE_EXPERIENCE_SUCCESS = "STUDENT_PROFILE_REMOVE_EXPERIENCE_SUCCESS";
export const STUDENT_PROFILE_ADD_PROJECT = "STUDENT_PROFILE_ADD_PROJECT";
export const STUDENT_PROFILE_ADD_PROJECT_FAIL = "STUDENT_PROFILE_ADD_PROJECT_FAIL";
export const STUDENT_PROFILE_ADD_PROJECT_SUCCESS = "STUDENT_PROFILE_ADD_PROJECT_SUCCESS";
export const STUDENT_PROFILE_EDIT_PROJECT = "STUDENT_PROFILE_EDIT_PROJECT";
export const STUDENT_PROFILE_EDIT_PROJECT_FAIL = "STUDENT_PROFILE_EDIT_PROJECT_FAIL";
export const STUDENT_PROFILE_EDIT_PROJECT_SUCCESS = "STUDENT_PROFILE_EDIT_PROJECT_SUCCESS";
export const STUDENT_PROFILE_REMOVE_PROJECT = "STUDENT_PROFILE_REMOVE_PROJECT";
export const STUDENT_PROFILE_REMOVE_PROJECT_FAIL = "STUDENT_PROFILE_REMOVE_PROJECT_FAIL";
export const STUDENT_PROFILE_REMOVE_PROJECT_SUCCESS = "STUDENT_PROFILE_REMOVE_PROJECT_SUCCESS";
export const STUDENT_CREATE_QUERY = "STUDENT_CREATE_QUERY";
export const STUDENT_CREATE_QUERY_FAIL = "STUDENT_CREATE_QUERY_FAIL";
export const STUDENT_CREATE_QUERY_SUCCESS = "STUDENT_CREATE_QUERY_SUCCESS";
export const STUDENT_REPORT_BUG = "STUDENT_REPORT_BUG";
export const STUDENT_REPORT_BUG_FAIL = "STUDENT_REPORT_BUG_FAIL";
export const STUDENT_REPORT_BUG_SUCCESS = "STUDENT_REPORT_BUG_SUCCESS";
export const STUDENT_FETCH_ANNOUNCEMENTS = "STUDENT_FETCH_ANNOUNCEMENTS";
export const STUDENT_FETCH_ANNOUNCEMENTS_FAIL = "STUDENT_FETCH_ANNOUNCEMENTS_FAIL";
export const STUDENT_FETCH_ANNOUNCEMENTS_SUCCESS = "STUDENT_FETCH_ANNOUNCEMENTS_SUCCESS";
export const STUDENT_RESET_PASSWORD = "STUDENT_RESET_PASSWORD";
export const STUDENT_RESET_PASSWORD_FAIL = "STUDENT_RESET_PASSWORD_FAIL";
export const STUDENT_RESET_PASSWORD_SUCCESS = "STUDENT_RESET_PASSWORD_SUCCESS";
export const STUDENT_GET_JOBS = "STUDENT_GET_JOBS";
export const STUDENT_GET_JOBS_FAIL = "STUDENT_GET_JOBS_FAIL";
export const STUDENT_GET_JOBS_SUCCESS = "STUDENT_GET_JOBS_SUCCESS";

/*
    Company Profile Actions
*/

export const COMPANY_PROFILE_CREATE = "COMPANY_PROFILE_CREATE";
export const COMPANY_PROFILE_CREATE_SUCCESS = "COMPANY_PROFILE_CREATE_SUCCESS";
export const COMPANY_PROFILE_CREATE_FAIL = "COMPANY_PROFILE_CREATE_FAIL";
export const COMPANY_PROFILE_EDIT = "COMPANY_PROFILE_EDIT";
export const COMPANY_PROFILE_EDIT_SUCCESS = "COMPANY_PROFILE_EDIT_SUCCESS";
export const COMPANY_PROFILE_EDIT_FAIL = "COMPANY_PROFILE_EDIT_FAIL";
export const COMPANY_PROFILE_FETCH = "COMPANY_PROFILE_FETCH";
export const COMPANY_PROFILE_FETCH_FAIL = "COMPANY_PROFILE_FETCH_FAIL";
export const COMPANY_PROFILE_FETCH_SUCCESS = "COMPANY_PROFILE_FETCH_SUCCESS";

/*
    Company Job Actions
*/

export const COMPANY_JOB_CREATE = "COMPANY_JOB_CREATE";
export const COMPANY_JOB_CREATE_SUCCESS = "COMPANY_JOB_CREATE_SUCCESS";
export const COMPANY_JOB_CREATE_FAIL = "COMPANY_JOB_CREATE_FAIL";
export const COMPANY_JOB_EDIT = "COMPANY_JOB_EDIT";
export const COMPANY_JOB_EDIT_SUCCESS = "COMPANY_JOB_EDIT_SUCCESS";
export const COMPANY_JOB_EDIT_FAIL = "COMPANY_JOB_EDIT_FAIL";
export const GET_COMPANY_JOB = "GET_COMPANY_JOB";
export const GET_COMPANY_JOB_SUCCESS = "GET_COMPANY_JOB_SUCCESS";
export const GET_COMPANY_JOB_FAIL = "GET_COMPANY_JOB_FAIL";
export const DELETE_COMPANY_JOB = "DELETE_COMPANY_JOB";
export const DELETE_COMPANY_JOB_SUCCESS = "DELETE_COMPANY_JOB_SUCCESS";
export const DELETE_COMPANY_JOB_FAIL = "DELETE_COMPANY_JOB_FAIL";
export const GET_STUDENT_PROFILES = "GET_STUDENT_PROFILES";
export const GET_STUDENT_PROFILES_SUCCESS = "GET_STUDENT_PROFILES_SUCCESS";
export const GET_STUDENT_PROFILES_FAIL = "GET_STUDENT_PROFILES_FAIL";

/*
   Admin Actions
 */

export const ADMIN_GET_STUDENT_PROFILES = "ADMIN_GET_STUDENT_PROFILES";
export const ADMIN_GET_STUDENT_PROFILES_FAIL = "ADMIN_GET_STUDENT_PROFILES_FAIL";
export const ADMIN_GET_STUDENT_PROFILES_SUCCESS = "ADMIN_GET_STUDENT_PROFILES_SUCCESS";
export const ADMIN_APPROVE_STUDENT_PROFILE = "ADMIN_APPROVE_STUDENT_PROFILE";
export const ADMIN_APPROVE_STUDENT_PROFILE_FAIL = "ADMIN_APPROVE_STUDENT_PROFILE_FAIL";
export const ADMIN_APPROVE_STUDENT_PROFILE_SUCCESS = "ADMIN_APPROVE_STUDENT_PROFILE_SUCCESS";
export const ADMIN_DISAPPROVE_STUDENT_PROFILE = "ADMIN_DISAPPROVE_STUDENT_PROFILE";
export const ADMIN_DISAPPROVE_STUDENT_PROFILE_FAIL = "ADMIN_DISAPPROVE_STUDENT_PROFILE_FAIL";
export const ADMIN_DISAPPROVE_STUDENT_PROFILE_SUCCESS = "ADMIN_DISAPPROVE_STUDENT_PROFILE_SUCCESS";
export const ADMIN_GET_COMPANY_PROFILES = "ADMIN_GET_COMPANY_PROFILES";
export const ADMIN_GET_COMPANY_PROFILES_FAIL = "ADMIN_GET_COMPANY_PROFILES_FAIL";
export const ADMIN_GET_COMPANY_PROFILES_SUCCESS = "ADMIN_GET_COMPANY_PROFILES_SUCCESS";
export const ADMIN_APPROVE_COMPANY_PROFILE = "ADMIN_APPROVE_COMPANY_PROFILE";
export const ADMIN_APPROVE_COMPANY_PROFILE_FAIL = "ADMIN_APPROVE_COMPANY_PROFILE_FAIL";
export const ADMIN_APPROVE_COMPANY_PROFILE_SUCCESS = "ADMIN_APPROVE_COMPANY_PROFILE_SUCCESS";
export const ADMIN_DISAPPROVE_COMPANY_PROFILE = "ADMIN_DISAPPROVE_COMPANY_PROFILE";
export const ADMIN_DISAPPROVE_COMPANY_PROFILE_FAIL = "ADMIN_DISAPPROVE_COMPANY_PROFILE_FAIL";
export const ADMIN_DISAPPROVE_COMPANY_PROFILE_SUCCESS = "ADMIN_DISAPPROVE_COMPANY_PROFILE_SUCCESS";
export const ADMIN_CREATE_COMPANY_LOGIN = "ADMIN_CREATE_COMPANY_LOGIN";
export const ADMIN_CREATE_COMPANY_LOGIN_FAIL = "ADMIN_CREATE_COMPANY_LOGIN_FAIL";
export const ADMIN_CREATE_COMPANY_LOGIN_SUCCESS = "ADMIN_CREATE_COMPANY_LOGIN_SUCCESS";
export const ADMIN_CREATE_ANNOUNCEMENT = "ADMIN_CREATE_ANNOUNCEMENT";
export const ADMIN_CREATE_ANNOUNCEMENT_FAIL = "ADMIN_CREATE_ANNOUNCEMENT_FAIL";
export const ADMIN_CREATE_ANNOUNCEMENT_SUCCESS = "ADMIN_CREATE_ANNOUNCEMENT_SUCCESS";
export const ADMIN_APPROVE_STUDENT_CV = "ADMIN_APPROVE_STUDENT_CV";
export const ADMIN_APPROVE_STUDENT_CV_FAIL = "ADMIN_APPROVE_STUDENT_CV_FAIL";
export const ADMIN_APPROVE_STUDENT_CV_SUCCESS = "ADMIN_APPROVE_STUDENT_CV_SUCCESS";
export const ADMIN_DISAPPROVE_STUDENT_CV = "ADMIN_DISAPPROVE_STUDENT_CV";
export const ADMIN_DISAPPROVE_STUDENT_CV_FAIL = "ADMIN_DISAPPROVE_STUDENT_CV_FAIL";
export const ADMIN_DISAPPROVE_STUDENT_CV_SUCCESS = "ADMIN_DISAPPROVE_STUDENT_CV_SUCCESS";
export const ADMIN_DISABLE_STUDENT_PROFILE = "ADMIN_DISABLE_STUDENT_PROFILE";
export const ADMIN_DISABLE_STUDENT_PROFILE_FAIL = "ADMIN_DISABLE_STUDENT_PROFILE_FAIL";
export const ADMIN_DISABLE_STUDENT_PROFILE_SUCCESS = "ADMIN_DISABLE_STUDENT_PROFILE_SUCCESS";
export const ADMIN_ENABLE_STUDENT_PROFILE = "ADMIN_ENABLE_STUDENT_PROFILE";
export const ADMIN_ENABLE_STUDENT_PROFILE_FAIL = "ADMIN_ENABLE_STUDENT_PROFILE_FAIL";
export const ADMIN_ENABLE_STUDENT_PROFILE_SUCCESS = "ADMIN_ENABLE_STUDENT_PROFILE_SUCCESS";
export const ADMIN_DOWNLOAD_DATA = "ADMIN_DOWNLOAD_DATA";
export const ADMIN_DOWNLOAD_DATA_FAIL = "ADMIN_DOWNLOAD_DATA_FAIL";
export const ADMIN_DOWNLOAD_DATA_SUCCESS = "ADMIN_DOWNLOAD_DATA_SUCCESS";

/*
    UI Actions
*/

export const SIDER_COLLAPSE = "SIDER_COLLAPSE";
