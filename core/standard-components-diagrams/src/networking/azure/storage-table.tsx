import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_TABLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storage_table;',
  _width: 50,
  _height: 45,
}

export function StorageTable(props: DiagramNodeProps) {
  return <Shape {...STORAGE_TABLE} {...props} />
}
