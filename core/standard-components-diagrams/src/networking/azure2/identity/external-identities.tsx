import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTERNAL_IDENTITIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/External_Identities.svg;strokeColor=none;',
  },
  _width: 62.480000000000004,
  _height: 68,
}

export function ExternalIdentities(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTERNAL_IDENTITIES}
      {...props}
      _style={extendStyle(EXTERNAL_IDENTITIES, props)}
    />
  )
}
