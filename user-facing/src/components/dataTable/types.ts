import { ApiDataItem } from "../../types/ApiDataItem";

export interface Column {
	Header: string;
	accessor: keyof ApiDataItem;
}
