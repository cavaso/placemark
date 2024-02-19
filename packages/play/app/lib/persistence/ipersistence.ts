import type { ISymbolization } from "types";
import { EditWrappedFeatureCollection } from "app/wrappedFeatureCollections/validations";
import type { MomentInput } from "./moment";
import { IDMap } from "app/lib/id_mapper";
import { Promisable } from "type-fest";
import { z } from "zod";

export type PersistenceMetadataMemory = {
  type: "memory";
  symbolization: ISymbolization;
  label: string | null;
  layer: null;
};

export type PersistenceMetadata = PersistenceMetadataMemory;

export interface TransactOptions {
  quiet?: boolean;
}

export type MetaUpdatesInput = Omit<
  z.infer<typeof EditWrappedFeatureCollection>,
  "id"
>;

export type MetaPair = [
  PersistenceMetadata,
  (updates: MetaUpdatesInput) => Promisable<void>
];

export interface IPersistence {
  idMap: IDMap;

  putPresence(presence: unknown): Promise<void>;

  useLastPresence(): null;

  useHistoryControl(): (direction: "undo" | "redo") => Promise<void>;

  /**
   * The main method for making changes to the map: give this
   * a partial moment which can delete or add features and folders,
   * and it'll implement it. Unless you specify that the change
   * is quiet, the change is pushed onto the undo history.
   */
  useTransact(): (
    moment: Partial<MomentInput> & TransactOptions
  ) => Promise<void>;

  /**
   * Delete existing features.
   */
  useMetadata(): MetaPair;
}