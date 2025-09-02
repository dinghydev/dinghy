import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SITE_RECOVERY_FUNCTIONAL_ICON = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.site_recovery_functional_icon;',
  },
  _original_width: 40.5,
  _original_height: 50,
}

export function SiteRecoveryFunctionalIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...SITE_RECOVERY_FUNCTIONAL_ICON}
      {...props}
      _style={extendStyle(SITE_RECOVERY_FUNCTIONAL_ICON, props)}
    />
  )
}
