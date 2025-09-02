import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERIFIABLE_CREDENTIALS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Verifiable_Credentials.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function VerifiableCredentials(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERIFIABLE_CREDENTIALS}
      {...props}
      _style={extendStyle(VERIFIABLE_CREDENTIALS, props)}
    />
  )
}
