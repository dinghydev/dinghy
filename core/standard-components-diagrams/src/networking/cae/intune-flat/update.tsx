import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPDATE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.update',
  },
  _width: 48,
  _height: 50,
}

export function Update(props: DiagramNodeProps) {
  return <Shape {...UPDATE} {...props} _style={extendStyle(UPDATE, props)} />
}
