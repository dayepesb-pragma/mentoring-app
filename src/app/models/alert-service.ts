export interface AlertService {
  alert(type: AlertType, message: string): void;
}

interface AlertType {
  success: string;
  error: string;
  warning: string;
}