<?php

namespace ClarkWinkelmann\Test;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listeners\Assets::class);
};
