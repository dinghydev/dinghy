import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOKEN_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/Azure_Token_Service.svg;strokeColor=none;',
  _width: 59,
  _height: 68,
}

export function TokenService(props: DiagramNodeProps) {
  return (
    <Shape
      {...TOKEN_SERVICE}
      {...props}
      _style={extendStyle(TOKEN_SERVICE, props)}
    />
  )
}
