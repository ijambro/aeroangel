export type Flight = {
  id: number;
  from: string;
  to: string;
  departure: Date;
  provider: string;
  status: FlightStatus;
};

export enum FlightStatus {
  draft = 1,
  requested,
  accepted,
  in_progress,
  completed,
  cancelled,
}
