import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEBAPPUMBRACO = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/WebAppUmbraco.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function Webappumbraco(props: NodeProps) {
  return (
    <Shape
      {...WEBAPPUMBRACO}
      {...props}
      _style={extendStyle(WEBAPPUMBRACO, props)}
    />
  )
}
