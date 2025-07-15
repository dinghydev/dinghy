import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_MEDIA_PLAYER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Media_Player.svg;',
  _width: 45,
  _height: 50,
}

export function AzureMediaPlayer(props: DiagramNodeProps) {
  return <Shape {...AZURE_MEDIA_PLAYER} {...props} />
}
