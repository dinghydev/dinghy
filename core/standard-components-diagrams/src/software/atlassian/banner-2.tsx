import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BANNER_2 = {
  _style: {
    entity: 'rounded=0;fillColor=#DE350A;strokeColor=none;html=1',
  },
  _original_width: 0,
  _original_height: 50,
}

export function Banner2(props: DiagramNodeProps) {
  return (
    <Shape {...BANNER_2} {...props} _style={extendStyle(BANNER_2, props)} />
  )
}
