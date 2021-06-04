FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  );

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create( inputElement );