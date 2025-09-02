import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPGRADE_SITE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.upgrade_site;',
  },
  _original_width: 59,
  _original_height: 48,
}

export function UpgradeSite(props: DiagramNodeProps) {
  return (
    <Shape
      {...UPGRADE_SITE}
      {...props}
      _style={extendStyle(UPGRADE_SITE, props)}
    />
  )
}
