import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEMUX = {
  _style: {
    entity:
      'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.abstract.mux2;operation=demux;whiteSpace=wrap;',
  },
  _original_width: 80,
  _original_height: 120,
}

export function Demux(props: DiagramNodeProps) {
  return <Shape {...DEMUX} {...props} _style={extendStyle(DEMUX, props)} />
}
