import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPGRADE_APPLICATION = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.upgrade_application;',
  _width: 58,
  _height: 42,
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
