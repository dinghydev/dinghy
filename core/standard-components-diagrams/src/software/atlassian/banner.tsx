import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BANNER = {
  _style: {
    entity: 'rounded=0;fillColor=#FFAB00;strokeColor=none;html=1',
  },
  _original_width: 0,
  _original_height: 50,
}

export function Banner(props: DiagramNodeProps) {
  return <Shape {...BANNER} {...props} _style={extendStyle(BANNER, props)} />
}
