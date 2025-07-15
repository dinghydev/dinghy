import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDIA_CONVERTER_STANDALONE = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/media_converters/Media_Converter_Standalone.svg;',
  _width: 45.6,
  _height: 37.2,
}

export function MediaConverterStandalone(props: DiagramNodeProps) {
  return <Shape {...MEDIA_CONVERTER_STANDALONE} {...props} />
}
