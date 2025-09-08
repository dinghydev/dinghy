import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AVS = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.avs;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 90,
  _original_height: 64,
}

export function Avs(props: DiagramNodeProps) {
  return <Shape {...AVS} {...props} _style={extendStyle(AVS, props)} />
}
