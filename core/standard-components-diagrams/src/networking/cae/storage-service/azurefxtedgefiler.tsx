import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZUREFXTEDGEFILER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/AzureFXTEdgeFiler.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Azurefxtedgefiler(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZUREFXTEDGEFILER}
      {...props}
      _style={extendStyle(AZUREFXTEDGEFILER, props)}
    />
  )
}
