import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UPGRADE_APPLICATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.upgrade_application;',
  },
  _original_width: 58,
  _original_height: 42,
}

export function UpgradeApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...UPGRADE_APPLICATION}
      {...props}
      _style={extendStyle(UPGRADE_APPLICATION, props)}
    />
  )
}
