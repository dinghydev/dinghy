import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAG_ISO = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.bag_(iso);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 50,
  _original_height: 95,
}

export function BagIso(props: DiagramNodeProps) {
  return <Shape {...BAG_ISO} {...props} _style={extendStyle(BAG_ISO, props)} />
}
