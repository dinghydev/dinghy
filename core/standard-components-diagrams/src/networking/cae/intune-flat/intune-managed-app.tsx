import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTUNE_MANAGED_APP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.intune_managed_app',
  },
  _width: 50,
  _height: 38,
}

export function IntuneManagedApp(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_MANAGED_APP}
      {...props}
      _style={extendStyle(INTUNE_MANAGED_APP, props)}
    />
  )
}
