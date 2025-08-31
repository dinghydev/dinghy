import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUBSCRIPTION_PORTAL = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.subscription_portal',
  _width: 60,
  _height: 60,
}

export function SubscriptionPortal(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUBSCRIPTION_PORTAL}
      {...props}
      _style={extendStyle(SUBSCRIPTION_PORTAL, props)}
    />
  )
}
