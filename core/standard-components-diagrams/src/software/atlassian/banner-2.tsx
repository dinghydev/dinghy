import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BANNER_2 = {
  _style: 'rounded=0;fillColor=#DE350A;strokeColor=none;html=1',
  _width: 0,
  _height: 50,
}

export function Banner2(props: DiagramNodeProps) {
  return (
    <Shape {...BANNER_2} {...props} _style={extendStyle(BANNER_2, props)} />
  )
}
