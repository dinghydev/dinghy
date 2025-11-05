import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_MEDIA_PLAYER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Media_Player.svg;strokeColor=none;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function AzureMediaPlayer(props: NodeProps) {
  return (
    <Shape
      {...AZURE_MEDIA_PLAYER}
      {...props}
      _style={extendStyle(AZURE_MEDIA_PLAYER, props)}
    />
  )
}
