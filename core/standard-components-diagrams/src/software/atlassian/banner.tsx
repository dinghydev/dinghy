import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BANNER = {
  _style: {
    entity: 'rounded=0;fillColor=#FFAB00;strokeColor=none;html=1',
  },
  _width: 0,
  _height: 50,
}

export function Banner(props: DiagramNodeProps) {
  return <Shape {...BANNER} {...props} _style={extendStyle(BANNER, props)} />
}
