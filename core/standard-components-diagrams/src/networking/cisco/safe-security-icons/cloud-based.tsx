import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_BASED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.cloud_based;',
  },
  _original_width: 50,
  _original_height: 31.5,
}

export function CloudBased(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_BASED}
      {...props}
      _style={extendStyle(CLOUD_BASED, props)}
    />
  )
}
