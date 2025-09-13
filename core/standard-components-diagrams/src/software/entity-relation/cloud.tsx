import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD = {
  _style: {
    entity: 'ellipse;shape=cloud;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 100,
  _height: 60,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} _style={extendStyle(CLOUD, props)} />
}
