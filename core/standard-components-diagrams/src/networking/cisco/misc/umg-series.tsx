import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UMG_SERIES = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.umg_series;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 101,
  _height: 50,
}

export function UmgSeries(props: DiagramNodeProps) {
  return (
    <Shape {...UMG_SERIES} {...props} _style={extendStyle(UMG_SERIES, props)} />
  )
}
