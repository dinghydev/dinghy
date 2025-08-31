import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Security.svg;strokeColor=none;',
  },
  _width: 56.720000000000006,
  _height: 68,
}

export function Security(props: DiagramNodeProps) {
  return (
    <Shape {...SECURITY} {...props} _style={extendStyle(SECURITY, props)} />
  )
}
