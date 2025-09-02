import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VDA_UPGRADE_SERVICE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.vda_upgrade_service;',
  },
  _original_width: 50,
  _original_height: 39.395,
}

export function VdaUpgradeService(props: DiagramNodeProps) {
  return (
    <Shape
      {...VDA_UPGRADE_SERVICE}
      {...props}
      _style={extendStyle(VDA_UPGRADE_SERVICE, props)}
    />
  )
}
