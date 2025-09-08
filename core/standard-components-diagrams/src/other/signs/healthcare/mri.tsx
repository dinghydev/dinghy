import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MRI = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.mri;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 93,
}

export function Mri(props: DiagramNodeProps) {
  return <Shape {...MRI} {...props} _style={extendStyle(MRI, props)} />
}
