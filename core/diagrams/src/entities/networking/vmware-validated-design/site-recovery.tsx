import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SITE_RECOVERY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.site_recovery;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function SiteRecovery(props: DiagramNodeProps) {
  return (
    <Shape
      {...SITE_RECOVERY}
      {...props}
      _style={extendStyle(SITE_RECOVERY, props)}
    />
  )
}
