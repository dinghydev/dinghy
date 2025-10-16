import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROTECTION_GROUP_CONFIG = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.protection_group_config;',
  },
  _original_width: 48.5,
  _original_height: 50,
}

export function ProtectionGroupConfig(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROTECTION_GROUP_CONFIG}
      {...props}
      _style={extendStyle(PROTECTION_GROUP_CONFIG, props)}
    />
  )
}
