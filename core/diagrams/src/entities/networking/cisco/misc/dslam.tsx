import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DSLAM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.dslam;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 46,
  _original_height: 51,
}

export function Dslam(props: NodeProps) {
  return <Shape {...DSLAM} {...props} _style={extendStyle(DSLAM, props)} />
}
