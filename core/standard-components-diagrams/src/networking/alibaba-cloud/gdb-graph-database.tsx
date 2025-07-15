import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GDB_GRAPH_DATABASE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.gdb_graph_database;',
  _width: 54.900000000000006,
  _height: 47.400000000000006,
}

export function GdbGraphDatabase(props: DiagramNodeProps) {
  return <Shape {...GDB_GRAPH_DATABASE} {...props} />
}
