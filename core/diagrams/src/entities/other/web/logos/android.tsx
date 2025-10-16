import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANDROID = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.android;fillColor=#A4CA39;strokeColor=none',
  },
  _original_width: 67.60000000000001,
  _original_height: 80,
}

export function Android(props: DiagramNodeProps) {
  return <Shape {...ANDROID} {...props} _style={extendStyle(ANDROID, props)} />
}
