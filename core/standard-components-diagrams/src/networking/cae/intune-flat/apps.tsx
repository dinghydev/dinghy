import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.apps',
  },
  _width: 60,
  _height: 60,
}

export function Apps(props: DiagramNodeProps) {
  return <Shape {...APPS} {...props} _style={extendStyle(APPS, props)} />
}
