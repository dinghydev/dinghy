import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_ENVIRONMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Web_Environment.svg;strokeColor=none;',
  _width: 64,
  _height: 66,
}

export function WebEnvironment(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_ENVIRONMENT}
      {...props}
      _style={extendStyle(WEB_ENVIRONMENT, props)}
    />
  )
}
